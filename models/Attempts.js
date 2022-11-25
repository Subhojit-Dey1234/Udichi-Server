const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttemptSchema = new Schema({
	test: {
		type: Schema.Types.ObjectId,
		ref: "test_schema",
	},
	candidate: {
		type: Schema.Types.ObjectId,
		ref: "candidate_schema",
	},
	starting_time: {
		type: Date,
		default: Date.now(),
	},
	questions_submitted: [
		{
			type: Schema.Types.ObjectId,
			ref: "question_submission_schema",
		},
	],
	zip_files: {},
});

module.exports = mongoose.model("attempt_schema", AttemptSchema);
