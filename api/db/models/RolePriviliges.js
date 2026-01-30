const mongoose = require("mongoose")


const schema = mongoose.Schema({
    role_id: { type: mongoose.SchemaTypes.ObjectId, required: true },
    permission: { type: String },
    create_by: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class RolePriviliges extends mongoose.Model {

}

schema.loadClass(RolePriviliges);
module.exports = mongoose.model("rolePriviliges", schema)