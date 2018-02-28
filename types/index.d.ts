export interface HipchatAppender {
	type: 'hipchat';
	// User token with notification privileges
	hipchat_token: string;
	// Room ID or name
	hipchat_room: string;
	// (defaults to empty string) - a label to say where the message is from
	hipchat_from?: string;
	// (defaults to false) - make hipchat annoy people
	hipchat_notify?: boolean;
	// (defaults to api.hipchat.com) - set this if you have your own hipchat server
	hipchat_host?: string;
	// (defaults to only throwing errors) - implement this function if you want intercept the responses from hipchat
	hipchat_response_callback?(err: Error, response: any): any;
	// (defaults to messagePassThroughLayout)
	layout?: Layout;
}
