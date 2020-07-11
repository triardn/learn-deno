import { Application, Context } from "https://deno.land/x/abc@v1/mod.ts";

const app = new Application()

app.
    get("/", () => {
        return "Hi, this is index page"
    }).
    get("/about-me", (ctx: Context) => {
        ctx.json({"id": "123", "title": "about-me page"})
    }).
    get("/hire-me", (ctx: Context) => {
        return "PLS HIRE ME!!"
    }).
    start({ port: 3400 })