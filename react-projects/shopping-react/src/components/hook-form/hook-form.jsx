import {useForm} from "react-hook-form";

export function HookForm() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    
    return (
        <div className="container-fluid">
            <h2>Register</h2>
            <form>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" /></dd>
                </dl>
            </form>
        </div>
    );
}