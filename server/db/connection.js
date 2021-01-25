const mongoose = require('mongoose');
const uri='mongodb+srv://moinak878:test@cluster0.a0x7f.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
