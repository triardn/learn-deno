import { Application } from "https://deno.land/x/abc@v1/mod.ts";

const app = new Application()

app.
    get("/", () => {
        return "Hi, this is index page"
    }).
    start({ port: 3400 })