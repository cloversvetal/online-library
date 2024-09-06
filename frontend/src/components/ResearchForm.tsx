import { useState } from "react";
import { SearchParams } from "../types";

interface ResearchFormProps {
  handleFilterBooks: (params: SearchParams) => void;
}

const ResearchForm: React.FC<ResearchFormProps> = ({ handleFilterBooks }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    title: "",
    author: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setSearchParams({
      title: inputName === "title" ? inputValue : searchParams.title,
      author: inputName === "author" ? inputValue : searchParams.author,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterBooks(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="research-form mb-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="title"
            value={searchParams.title}
            onChange={handleInputChange}
            placeholder="Titolo"
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="author"
            value={searchParams.author}
            onChange={handleInputChange}
            placeholder="Autore"
          />
        </div>

        <div className="col-md-6">
          <button type="submit" className="btn btn-primary w-100">
            Cerca
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResearchForm;
