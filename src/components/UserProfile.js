function UserProfile({ users }) {
  const { name, avatar, phone, id } = user;

  return (
    <div key={id} className="p-2 text-center border border-1 rounded-1">
      <img src={avatar} alt={name} className="img-fluid" />
      <h1>{name}</h1>
      <p>{phone}</p>
    </div>
  );
}

export default UserProfile;
