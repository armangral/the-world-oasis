import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  max-width: 300px;
`;

function GuestSelector({ options, value, onChange }) {
  return (
    <StyledSelect
      value={value?.fullName || ""}
      onChange={(e) =>
        onChange(options.find((option) => option.fullName === e.target.value))
      }
    >
      <option value="" key="empty">
        {" "}
      </option>
      {options?.map((option) => (
        <option value={option.fullName} key={option.fullName}>
          {option.fullName}
        </option>
      ))}
    </StyledSelect>
  );
}

export default GuestSelector;
