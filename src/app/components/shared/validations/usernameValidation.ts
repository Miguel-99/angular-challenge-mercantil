import { AbstractControl } from "@angular/forms";
import { UsernameService } from "src/app/services/username/username.service";
import { map } from "rxjs/operators";

export class usernameValidator {
    static username(userService: UsernameService) {
        return (control: AbstractControl) => {
            const username = control.value;

            return userService.usernameExists(username)
                .pipe(
                    map(res => {
                        return res ? { usernameTaken: true } : null;
                    })
                )
        }
    }
}

