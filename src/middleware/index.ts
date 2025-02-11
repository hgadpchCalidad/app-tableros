import { defineMiddleware } from "astro:middleware";
import { supabase } from "../lib/supabase";
import micromatch from "micromatch";

const protectedRoutes = ["/dashboard(|/)","/tablaGoogleSheet(|/)","/dashboardDirec(|/)","/tablaInsumos(|/)","/(|/)"];
const redirectRoutes = ["/authentication/sign-in(|/)", "/register(|/)"];

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {

    const dataUser = cookies.get("sb-user");

    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");



      if (!accessToken || !refreshToken) {
        return redirect("/authentication/sign-in");
      }

      const user = JSON.parse(dataUser?.value); 

      if(url.pathname === "/tablaGoogleSheet" && user.rol === "prefecto"){
        return redirect("/dashboard")
      }
      if(url.pathname === "/dashboardDirec" && user.rol === "director"){
        return redirect("/dashboard")
      }


      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      });


      if (error) {
        cookies.delete("sb-access-token", {
          path: "/",
        });
        cookies.delete("sb-refresh-token", {
          path: "/",
        });
        return redirect("/authentication/sign-in");
      }



      locals.email = data.user?.email!;
      cookies.set("sb-access-token", data?.session?.access_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token!, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }

    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");

      if (accessToken && refreshToken) {
        return redirect("/dashboard");
      }
    }
    return next();
  },
);