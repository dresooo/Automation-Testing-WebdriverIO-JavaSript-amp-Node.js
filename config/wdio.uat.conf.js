import {config as baseConfig} from "../wdio.conf"

export const config = Object.assign(baseConfig, {
    environment: "TEST",
    email: "autotest@gmail.com",
    firstName: "John",
    password: "pass1",
    baseUrl: "https://automationteststore.com",
})