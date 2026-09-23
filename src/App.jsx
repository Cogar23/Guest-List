import { useState, useEffect } from "react";
import axios from "axios";
import Guests from "../GuestList/Guests";
import GuestDetails from "../GuestList/GuestDetails";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchGuests = async () => {
      const { data } = await axios.get(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2607-FTB-CT-WEB-PT/guests",
      );
      console.log(data);
      setGuests(data.data);
    };
    fetchGuests();
  }, []);

  return (
    <div>
      <h1>Guest List</h1>
      <Guests guests={guests} setSelectedGuest={setSelectedGuest} />
      <hr />
      {selectedGuest ? (
        <GuestDetails
          selectedGuest={selectedGuest}
          setSelectedGuest={setSelectedGuest}
        />
      ) : (
        <h5>Please select a guest to learn more</h5>
      )}
    </div>
  );
}
