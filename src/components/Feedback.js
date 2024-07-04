import { useForm } from "../hooks/useForm";
import { constants } from "../utils/constants";
import { LogRegForm } from "./LogRegForm";
import { LogRegInput } from "./LogRegInput";


export function Feedback(){

  const {values, onChange, setValues } = useForm({});

  console.log(values);
  return(
    <section id="feedback" className="feedback">
      <h2 className="section-title">{constants.feedback.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.feedback.sectionSubtitle}
      </h3>
      <LogRegForm>
        <LogRegInput type={"text"} value={values["name"]} onChange={onChange} name={"name"} />
        <LogRegInput type={"tel"} value={values["tel"]} onChange={onChange} name={"tel"} />
        <LogRegInput type={"email"} value={values["email"]} onChange={onChange} name={"email"} />
      </LogRegForm>
    </section>
  )
}