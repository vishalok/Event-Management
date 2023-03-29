const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  regLink: { type: String },
  date: {
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
  },
  speakers: [
    {
      name: { type: String, required: true },
      about: { type: String },
      image: { type: String }
    }
  ],
  moderator: {
    name: { type: String },
    about: { type: String },
    image: { type: String }
  },
  resources: { type: String },
  joiningInfo: { type: String },
  organisedBy: { type: String },
  tags: [{ type: String }],
  updatedAt: {
      type: Date,
      default: () => {
          return Date.now();
      }
  } 
});

const eventModel = mongoose.model('Event', eventSchema);

module.exports = eventModel;
