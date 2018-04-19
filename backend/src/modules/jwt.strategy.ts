import { Component, Inject } from "@nestjs/common";
import * as passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users/users.service";

@Component()
export class JwtStrategy extends Strategy {
    constructor(
        private readonly authService: AuthService,
    ) {
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                passReqToCallback: true,
                secretOrKey: "MY_SECRET",
            },
            async (req, payload, next) => await this.verify(req, payload, next),
        );
        passport.use(this);
    }

    public async verify(req, payload, done) {
        const isValid = await this.authService.validateUser(payload);
        // if (!isValid) {
        //     return done("asdasdas", false);
        // }
        done("authorized", payload);
    }
}
