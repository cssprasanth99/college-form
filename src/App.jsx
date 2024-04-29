import React, { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: {
      city_name: "",
      locality: {
        pincode: "",
        landmark: "",
      },
    },
    state: "",
    coordinates: {
      longitude: "",
      latitude: "",
    },
  },
  courses_offered: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "ESTB":
      return { ...state, establishment_year: action.payload };
    case "BUILDING":
      return {
        ...state,
        address: {
          ...state.address,
          building: action.payload,
        },
      };
    case "STREET":
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    case "CITY":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            city_name: action.payload,
          },
        },
      };
    case "PINCODE":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              pincode: action.payload,
            },
          },
        },
      };
    case "LANDMARK":
      return {
        ...state,
        address: {
          ...state.address,
          city: {
            ...state.address.city,
            locality: {
              ...state.address.city.locality,
              landmark: action.payload,
            },
          },
        },
      };
    case "STATE":
      return {
        ...state,
        address: {
          ...state.address,
          state: action.payload,
        },
      };
    case "LATITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            latitude: action.payload,
          },
        },
      };
    case "LONGITUDE":
      return {
        ...state,
        address: {
          ...state.address,
          coordinates: {
            ...state.address.coordinates,
            longitude: action.payload,
          },
        },
      };
    case "COURSES":
      return { ...state, courses_offered: action.payload };
    case "RESET":
      return initialState;
    default:
      throw new Error(`action type is invalid`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [flag, setFlag] = useState(false);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFlag(!flag);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>College Name</h2>
        <input
          type="text"
          placeholder="College Name"
          name="name"
          value={state.name}
          onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        />
        <h2>Establishment Year</h2>
        <input
          type="number"
          placeholder="Establishment Year"
          name="establishment_year"
          value={state.establishment_year}
          onChange={(e) => dispatch({ type: "ESTB", payload: e.target.value })}
        />
        <h2>Address</h2>
        <h3>Building</h3>
        <input
          type="text"
          placeholder="Building Name"
          name="building"
          value={state.building}
          onChange={(e) =>
            dispatch({ type: "BUILDING", payload: e.target.value })
          }
        />
        <h3>Street</h3>
        <input
          type="text"
          placeholder="Street Name"
          name="street"
          value={state.street}
          onChange={(e) =>
            dispatch({ type: "STREET", payload: e.target.value })
          }
        />
        <h3>City</h3>
        <h4>City Name</h4>
        <input
          type="text"
          placeholder="City Name"
          name="city_name"
          value={state.city_name}
          onChange={(e) => dispatch({ type: "CITY", payload: e.target.value })}
        />
        <h4>Pincode</h4>
        <input
          type="text"
          placeholder="Pincode"
          name="pincode"
          value={state.pincode}
          onChange={(e) =>
            dispatch({ type: "PINCODE", payload: e.target.value })
          }
        />
        <h4>Landmark</h4>
        <input
          type="text"
          placeholder="Landmark"
          name="landmark"
          value={state.landmark}
          onChange={(e) =>
            dispatch({ type: "LANDMARK", payload: e.target.value })
          }
        />
        <h3>State</h3>
        <input
          type="text"
          placeholder="State Name"
          name="state"
          value={state.state}
          onChange={(e) => dispatch({ type: "STATE", payload: e.target.value })}
        />
        <h2>Coordinates</h2>
        <h3>Latitude</h3>
        <input
          type="text"
          placeholder="Latitude"
          name="latitude"
          value={state.latitude}
          onChange={(e) =>
            dispatch({ type: "LATITUDE", payload: e.target.value })
          }
        />
        <h3>Longitude</h3>
        <input
          type="text"
          placeholder="Longitude"
          name="longitude"
          value={state.longitude}
          onChange={(e) =>
            dispatch({ type: "LONGITUDE", payload: e.target.value })
          }
        />
        <h2>Courses Offered</h2>
        <input
          type="text"
          placeholder="Courses Offered"
          name="courses_offered"
          value={state.courses_offered}
          onChange={(e) =>
            dispatch({ type: "COURSES", payload: e.target.value })
          }
        />
        <br />
        <br />
        <button type="submit" style={{ padding: "5px" }}>
          Submit
        </button>
        <br />
        <button
          type="submit"
          style={{ padding: "5px" }}
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </form>
      {flag && (
        <div>
          <h2>College Name:{state.name}</h2>
          <h2>Established Year:{state.establishment_year}</h2>
          <h2>
            Address:{state.address.street},{state.address.building}, ,
            {state.address.city.city_name}
          </h2>
          <h2>
            Locality:{state.address.city.locality.landmark},
            {state.address.city.locality.pincode}
          </h2>
          <h2>State:{state.address.state}</h2>
          <h2>Courses:{state.courses_offered}</h2>
        </div>
      )}
    </>
  );
}

export default App;
