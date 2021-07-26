import React, { useRef } from "react";
import Membership from "../models/membership";

const MembershipForm: React.FC<{
  onAddMembership: (membership: Membership) => void;
}> = (props) => {
  const membershipCodeInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const resetHandler = () => {
    membershipCodeInputRef.current!.value = "";
    titleInputRef.current!.value = "";
    descriptionInputRef.current!.value = "";
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const newMembership = {
      membershipCode: membershipCodeInputRef.current!.value,
      title: titleInputRef.current!.value,
      description: descriptionInputRef.current!.value,
    };
    props.onAddMembership(newMembership);
  };

  return (
    <form onSubmit={submitHandler}>
      <button onClick={resetHandler}>Reset Form</button>
      <p>
        <label htmlFor="membershipCode">Membership Code:</label>
        <br />
        <input type="text" id="membershipCode" ref={membershipCodeInputRef} />
      </p>
      <p>
        <label htmlFor="title">Title:</label>
        <br />
        <input type="text" id="title" ref={titleInputRef} />
      </p>
      <p>
        <label htmlFor="description">Description:</label>
        <br />
        <input type="text" id="description" ref={descriptionInputRef} />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
};
export default MembershipForm;
