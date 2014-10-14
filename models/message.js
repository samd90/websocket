

var messageSchema = mongoose.Schema({ message: String})
exports.schema = mongoose.model('message', messageSchema,'message');
exports.name = 'message';