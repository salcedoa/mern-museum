import { Link } from "react-router-dom";

const previewImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Artifact_at_Norton_2019-02-10_1188_A300.jpg/640px-Artifact_at_Norton_2019-02-10_1188_A300.jpg";

export default function CollectionPreview() {
  return (
    <div className="collection-preview">
      <img src={previewImage} alt="Carved stone depiction"/>
      <h1>Our Collection</h1>
      <p>Over 10 items</p>
      <Link className="link-button" to="collection">Explore</Link>
    </div>
  );
}