import webapp2

file = open("./public/index.html", "r")
#page = file.read()


class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write("Hello World File opened")
        
app = webapp2.WSGIApplication([('/', MainPage)], debug=True)