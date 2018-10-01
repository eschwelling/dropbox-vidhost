require "sinatra"
require "sinatra/json"
require "json"
require "sinatra/reloader" if development?
require "pry" if development? || test?

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")

CURRENT_FILE_PATH = File.dirname(__FILE__)

def read_urls
  JSON.parse(File.read("urls.json"))
end

before do
  headers({ "Access-Control-Allow-Origin" => "*" })
end

get "/" do
  erb :home
end

get "/api/v1/url/:id" do
  url = read_urls

  url = url.find do |url|
    url["id"] == params[:id].to_i
  end

  content_type :json
  json url
end


get "/api/v1/urls" do
  # required for step three
  urls = read_urls

  content_type :json
  json urls
end


post "/api/v1/urls" do
  current_urls = read_urls

  url = JSON.parse(request.body.read)
  url["id"] = current_urls.last["id"] + 1

  current_urls << url
  File.write("urls.json", JSON.pretty_generate(current_urls))

  content_type :json
  status 201
  json url
end

# If the path does not match any of the above routes, render the erb page.
get "*" do
  erb :home
end
