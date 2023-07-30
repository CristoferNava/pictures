import Picture from "./Picture";

const Pictures = ({ picturesList }) => {
  return (
    <div>
      {picturesList.map((picture) => {
        return <Picture key={picture.id} picture={picture} />;
      })}
    </div>
  );
};

export default Pictures;
