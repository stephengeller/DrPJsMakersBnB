var expect = require('chai').expect,
    Browser = require('zombie'),
    browser = new Browser(),
    url = 'http://localhost:1337/';


describe('App', function() {



    describe('/', function() {

        it('works', function(done) {
            browser.visit(url, function() {
                expect(browser.text('body')).to.include('Welcome to Dr. PJs MakersBnB!');
                done();
            })
        });

        it('can add a room', function(done) {
            browser.visit(url, function() {
                browser.fill('input[name=room]', 'Makers Academy');
                browser.document.forms[0].submit();
                browser.wait().then(function() {
                    console.log('Form submitted ok!');
                    browser.viewInBrowser();
                });
                expect(browser.text('body')).to.include('Makers Academy')
                done();
            })

        })
    })
});