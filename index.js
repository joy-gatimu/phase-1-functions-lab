// Function to calculate distance from Scuber headquarters in blocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; // Scuber headquarters is on 42nd Street
    return Math.abs(pickupLocation - hqLocation); // Returns the absolute distance in blocks
  }
  
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation); // Get the number of blocks
    return blocks * 264; // Each block is 264 feet
  }
  
 
  function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(destination - start); // Calculate distance in blocks
    return distanceInBlocks * 264; // Convert blocks to feet
  }
  
  // Function to calculate fare price based on start and destination blocks
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination); // Get the total distance in feet
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; 
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  
  
  console.log(distanceFromHqInBlocks(50)); 
  console.log(distanceFromHqInFeet(50)); 
  console.log(distanceTravelledInFeet(34, 38)); 
  console.log(calculatesFarePrice(34, 38)); 
  console.log(calculatesFarePrice(34, 50)); 
  console.log(calculatesFarePrice(34, 100)); 
  