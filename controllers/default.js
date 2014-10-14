exports.install = function(framework) {
	framework.route('/', view_homepage);
	framework.route('/usage/', view_usage);
   
   

	framework.websocket('/', socket_homepage, ['json']);

};

function view_usage() {
	var self = this;
	self.plain(self.framework.usage(true));
}

function view_homepage() {
	var self = this;
	self.view('homepage');
}

function socket_homepage() {

	var controller = this;


	controller.on('open', function(client) {

		console.log('Connect');    

	});

	controller.on('message', function(client, message) {

        console.log(message);
 /*
    var self = this;
    var message = MODEL('message').schema;
    var model = self.body;

    var message = new message({ message: model.message }).save(function(err) {

        if (err)
            self.throw500(err);

        // Read all messages
        message.find(self.callback());
    });
   
*/
		

	});

	controller.on('error', function(error, client) {

		framework.error(error, 'websocket', controller.uri);

	});

}
