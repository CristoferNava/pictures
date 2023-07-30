import Picture from "../Picture/Picture.component";

import "./Pictures.styles.css";

const Pictures = ({ picturesList }) => {
  return (
    <div className="pictures">
      {picturesList.map((picture) => {
        return <Picture key={picture.id} picture={picture} />;
      })}
    </div>
  );
};

export default Pictures;
