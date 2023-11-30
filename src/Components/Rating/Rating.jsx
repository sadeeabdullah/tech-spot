

const Rating = ({values}) => {
    return (
        <div>
             <Rating
      style={{ maxWidth: 180 }}
      value={values}
      readOnly
    />
        </div>
    );
};

export default Rating;