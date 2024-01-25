import React from 'react';
import {View, Image} from 'react-native';

// RATING COMPONENT CALLED IN PRODUCT DETAILS
const RatingComponent = ({rating, starImage}) => {
  const maxStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
      let starSource;

      if (i < rating) {
        // Full star
        starSource = starImage.filled;
      } else if (i === Math.ceil(rating) && i !== Math.floor(rating)) {
        // Half star
        starSource = starImage.half;
      } else {
        // Empty star
        starSource = starImage.empty;
      }

      stars.push(
        <Image
          key={i}
          source={starSource}
          style={{width: 16, height: 16, marginRight: 5}}
        />,
      );
    }
    return stars;
  };

  return <View style={{flexDirection: 'row'}}>{renderStars()}</View>;
};

export default RatingComponent;
