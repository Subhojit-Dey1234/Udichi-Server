const AttemptSchemaGroup = require("../../models/AttemptsGroupSchema");

const getAttemptsByTestId = async (req, res) => {
	console.log(req.params)
	try {
		let attempt_schema = await AttemptSchemaGroup.find({
			test: req.params.test,
		})
		.populate({
			path : "candidate",
			model : "candidate_schema"
		})
		if (attempt_schema.length === 0) res.status(404).send("Not Found");

		res.status(200).send(attempt_schema);
	} catch (error) {
		res.status(500).json(error.message);
	}
};

module.exports = getAttemptsByTestId;