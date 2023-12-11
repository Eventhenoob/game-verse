interface Props {
  setValueFunction: (pera: string) => void;
}

const OrderByTray = ({ setValueFunction }: Props) => {
  return (
    <select
      className=" rounded-xl p-2 bg-white text-black"
      onChange={(e) => setValueFunction(e.target.value)}
    >
      <option className="" value="-ratings">
        Ratings
      </option>
      <option className="" value="-updated">
        Updated
      </option>
      <option className="" value="added">
        Added
      </option>
      <option className="" value="-name">
        Name
      </option>
    </select>
  );
};

export default OrderByTray;
