const ProfileImage = ({id}) => {
  const image = "./images/" + id + ".jpeg";

  return (
    <div className="rounded-full overflow-hidden">
      <img src={image} alt="Image description" className="object-cover h-12 md:h-14 w-full" />
    </div>
  );
};

export default ProfileImage;