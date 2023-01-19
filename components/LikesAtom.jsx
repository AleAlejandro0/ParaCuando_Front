const LikesAtom = () => {
  let heartImage =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC1klEQVRoQ+1Zi00bQRDlOiAVBCogVBDSAXQAFQAVhFQQOoipADpIUgFQAe4AOnDek/bQaG/2ZvZ2lsiSV1pZ9u3MvDe/HdvD3pavYcvx7+0I/O8I7iKwVRHYbDb7APwF+wT7Kzbfcz9hr7H/DsPwUCLVKq/pdaVQMnwFBZcJ8Jzj3/DwGkRW8hB0kPQv7ANH1G4hf+04Z3chGKbH752GpU1G5SwR/o7XUw8gcYaO+AYi1FNcsxFIXiN4psnSRSAt8iTxp2S8SCB5/rdinICY58/YVMyUIMAjbKaZtShPuVF+rKvP+Oy8IHxcioRKIOU8wTN95KLhCyhba4aS3M8ZIB551kmebm+w+UmzWSJwg8PMW7l+QAk/NxeI0JMEMi56nfK3pjAOQN5tf0IgefEFemTePsA4C9K9RNdhtO7yrmQpgjxrT0aCTjiEHr6+L40AhSgsvWd2AwtQ7fOCI5m+K4tAztzdk2tBWudBgvUkG8MkE7QIsHhPhPIJa8tw1HMQyLNhjQgcWhFg/h+IQ7N9OAqspiel0atM57wbaRGggCzgYg/uCZ660130KOy4IpCnEOcaV/uLJqSk0BOwHFsplBfOCkIX0eA8+pT7wFXEWhtlGq09RqPOFNroWT6uly4yWTjEVH2RtRJRWigvsIkja0aJD2unyihCf6ijzNwwx+qX7ZRKupNI4FmHshOqYwQBWeO0bGFjVnQjMQOeNjnCT5bnCw3bar7CSRTAm1E3vxOnqbIriaXgZ1NIurwniRbwbgI82INEK/gqAtEkIsBXE4giEQV+EYFWEpHgFxNYSiIafBOBWhI9wDcT8JLoBT6EgEUi3Sf5bGPesNrYUD1KeJUYJLTfRsNGEXOUCCIh1YSBD0sh59gRljbSXmgERsWFsSPU86OtLgSymmANTP6xqUnNubPdCIho7Oc/yEaB71IDkeA8urpHwAOi5cyOQIv3ImS3PgL/APWIbEDqqwKVAAAAAElFTkSuQmCC';

  return (
    <div className="likesAtom">
      <div className="likeAtom__like like1">
        <img src={heartImage} alt="heart image" />
      </div>
      <div className="likeAtom__like like2">
        <img src={heartImage} alt="hearth image" />
      </div>
    </div>
  );
};

export default LikesAtom;
