const figlet = require('figlet');

// change the first argument of the call to figlet to have it print on success
figlet.text(
  'Greetings, Cohort 36',
  { horizontalLayout: 'full' },
  (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
