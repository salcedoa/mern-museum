import {Link} from "react-router-dom";

export default function SupportPrompt() {
  return (
    <div className="support-prompt-wrapper">
      <div className="support-prompt-text laptop-center">
        <h2>If you want to receive our monthly newletter, please enter your email</h2>
        <input type="email" spellCheck="false"></input>
        <button>Sign up</button>
        <Link to="support">Consider supporting the museum</Link>
      </div>
    </div>
  );
}