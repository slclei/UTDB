import React from "react";
import ReactDOM from "react-dom/client";

class info extends React.Component {
  state = { showing: false };

  render() {
    const { showing } = this.state;
    const deList = [
      ["Wells in Utah", "O", "O", "X"],
      ["Saline in Utah", "O", "X", "X"],
    ];
    return (
      <div style={{ position: "relative" }} className="popover-icons">
        <i
          style={{ cursor: "pointer" }}
          className="material-icons"
          id="infoIcon"
          uib-tooltip="Search by Address"
          onClick={() => this.setState({ showing: !showing })}
        >
          info
        </i>
        {showing ? (
          <div id="infoTable">
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #e6e6e6",
                      backgroundColor: "white",
                      textAlign: "center",
                    }}
                  >
                    Available layers\functions
                  </th>
                  <th
                    style={{
                      border: "1px solid #e6e6e6",
                      backgroundColor: "white",
                      textAlign: "center",
                    }}
                  >
                    Displayed in Map
                  </th>
                  <th
                    style={{
                      border: "1px solid #e6e6e6",
                      backgroundColor: "white",
                      textAlign: "center",
                    }}
                  >
                    Search by parameters
                  </th>
                  <th
                    style={{
                      border: "1px solid #e6e6e6",
                      backgroundColor: "white",
                      textAlign: "center",
                    }}
                  >
                    Download
                  </th>
                </tr>
              </thead>
              {deList.length > 0 &&
                deList.map((item: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr
                    style={{
                      border: "1px solid #e6e6e6",
                      backgroundColor: "white",
                    }}
                  >
                    <td
                      style={{
                        border: "1px solid #e6e6e6",
                        textAlign: "center",
                      }}
                    >
                      {item[0]}
                    </td>
                    <td
                      style={{
                        border: "1px solid #e6e6e6",
                        textAlign: "center",
                      }}
                    >
                      {item[1]}
                    </td>
                    <td
                      style={{
                        border: "1px solid #e6e6e6",
                        textAlign: "center",
                      }}
                    >
                      {item[2]}
                    </td>
                    <td
                      style={{
                        border: "1px solid #e6e6e6",
                        textAlign: "center",
                      }}
                    >
                      {item[3]}
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default info;
