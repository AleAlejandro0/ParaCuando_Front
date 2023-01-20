const SearchAtom = () => {
  const searchIcon =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABXElEQVRIS72UjW3CMBBGYQPYIGzQDQoblA3SCUonIEwATFA2gA1KJ2g7AWwAI/A9yScZEtuJknDSJwTY9+7PNxz0bMOe/Q9CgJHAufQqZRLf/6R/qWgSVBVgKgdr6SXgCNCndKwDegTgfO8ixsFWOktXB1x64FkdiA+gDN/OwUafK+f4MVCyW7j/xqksfACXuEwJiI6oQ0YgZEsQRQziAyjNmzSXDonIOMd5znE+aD7gpFOZNJHOCQDlvLgso2V6KuBLEeXSu7RLZED96cNRol+1SlToFGOYvKQz1q9GTaauv64PsYs2bUwZ/YpNW2lVWOqkbC+WT4yX/SExQdhOopxRq1oVOKIEWeAmETOeuQuC1w6s0mLbtNANlp3tJDL5kXjlQGysccxv7KeStVnX9tjMaWXf2gBwbHspCGkLSEK6AACxR1rqR1cAg9D8u2Z3CWg8pqHRbvR77xncAPv2SRnc7ybjAAAAAElFTkSuQmCC';

  return (
    <div className="searchAtom">
      <input
        className="searchAtom_input"
        type="text"
        placeholder="¿Que quieres ver en tu ciudad?"
      />

      <img className="searchAtom__img" src={searchIcon} alt="Search Icon" />
    </div>
  );
};

export default SearchAtom;
