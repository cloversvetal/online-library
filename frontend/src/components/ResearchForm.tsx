import { useState } from "react";

interface ResearchFormProps {
  onSearch: (params: SearchParams) => void;
}

export interface SearchParams {
  title?: string;
  author?: string;
}

const ResearchForm: React.FC<ResearchFormProps> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    title: "",
    author: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
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
