import { Component, ChangeEvent } from "react";
import WellService from "../services/WellService";
import { Link } from "react-router-dom";
import IWellData from '../types/Wells';

type Props = {};

type State = {
  wells: Array<IWellData>,
  currentWell: IWellData | null,
  currentAPI: number,
  searchName: string
};

export default class WellsList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveWells = this.retrieveWells.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveWell = this.setActiveWell.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      wells: [],
      currentWell: null,
      currentAPI: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveWells();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveWells() {
    WellService.getAll()
      .then((response: any) => {
        this.setState({
          wells: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveWells();
    this.setState({
      currentWell: null,
      currentAPI: -1
    });
  }

  setActiveWell(well: IWellData, index: number) {
    this.setState({
      currentWell: well,
      currentAPI: index
    });
  }

  searchName() {
    this.setState({
      currentWell: null,
      currentAPI: -1
    });

    WellService.findByName(this.state.searchName)
      .then((response: any) => {
        this.setState({
          wells: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, wells, currentWell, currentAPI } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Wells List</h4>

          <ul className="list-group">
            {wells &&
              wells.map((well: IWellData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentAPI ? "active" : "")
                  }
                  onClick={() => this.setActiveWell(well, index)}
                  key={index}
                >
                  {well.WellName}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentWell ? (
            <div>
              <h4>Well</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentWell.WellName}
              </div>
              <div>
                <label>
                  <strong>Well types:</strong>
                </label>{" "}
                {currentWell.WellType}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentWell.WellStatus ? "Published" : "Pending"}
              </div>

              <Link
                to={"/wells/" + currentWell.API}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Well...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}