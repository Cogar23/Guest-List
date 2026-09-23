const Guests = ({ guests, setSelectedGuest }) => {
  return (
    <div>
      <h3>There are {guests.length} guests</h3>
      {guests.map((guest) => {
        return (
          <div>
            <h3>Name: {guest.name}</h3>
            <p>Email: {guest.email}</p>
            <button
              onClick={() => {
                setSelectedGuest(guest);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Guests;
