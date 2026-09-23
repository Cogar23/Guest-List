const GuestDetails = ({ selectedGuest, setSelectedGuest }) => {
  return (
    <div>
      <p>Details about: {selectedGuest.name}</p>
      <p>Number: {selectedGuest.phone}</p>
      <p>Email: {selectedGuest.email}</p>
      <p>Bio: {selectedGuest.bio}</p>
      <p>Job: {selectedGuest.job}</p>
      <button
        onClick={() => {
          setSelectedGuest(null);
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default GuestDetails;
