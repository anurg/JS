import {useForm} from "react-hook-form";

export function HookForm() {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submit = (values)=>{
        alert(JSON.stringify(values))
    }
    return (
        <div className="container-fluid">
            <h2>Register</h2>
            <form onSubmit={handleSubmit(submit)}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" {...register("UserName", {required: true, minLength:4, pattern: /[A-Z]{4,15}/})}  /></dd>
                    <dd className="text-danger">
                        {(errors.UserName?.type==="required")?<span>User Name Required</span>:<span></span> && 
                        (errors.UserName?.type ==="minLength")?<span>User Name 4 chactaers or more</span>:<span></span> &&
                        (errors.UserName?.type ==="pattern")?<span>User Name in Block letters</span>:<span></span> }
                    
                    
                    </dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}