import { useForm } from "../hooks/useForm";
import { constants } from "../utils/constants";
import { LogRegForm } from "./LogRegForm";
import { LogRegInput } from "./LogRegInput";


export function Feedback(){

  const {values, onChange } = useForm({});

  return(
    <section id="feedback" className="feedback">
      <h2 className="section-title">{constants.feedback.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.feedback.sectionSubtitle}
      </h3>
      <LogRegForm formStyle={"feedback__form"}>
        <div className="feedback__input-list">
          <LogRegInput inputStyle={"feedback__input"} type={"text"} value={values["name"]} onChange={onChange} name={"name"} />
          <LogRegInput inputStyle={"feedback__input"} type={"tel"} value={values["tel"]} onChange={onChange} name={"tel"} />
          <LogRegInput inputStyle={"feedback__input"} type={"email"} value={values["email"]} onChange={onChange} name={"email"} />
        </div>
        <div className="feedback__message-container">
          <h3 className="feedback__message-container-title">test</h3>
          <textarea 
            className={"feedback__message-container-text"} 
            onChange={onChange} value={values["clientMessage"]} 
            name={"clientMeassage"}></textarea>
        </div>
        <button type="submit" className={"feedback__submit-button"}>Send</button>
      </LogRegForm>
    </section>
  )
}