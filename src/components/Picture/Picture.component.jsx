import "./Picture.styles.css";

const Picture = ({ picture }) => {
  const pictureUrl = picture.urls.regular;
  const altDescription = picture.alt_description;

  return (
    <div className="picture">
      <img src={pictureUrl} alt={altDescription} />
    </div>
  );
};

export default Picture;
