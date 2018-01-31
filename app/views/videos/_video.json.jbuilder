json.extract! video, :id, :title, :description, :link, :icon, :created_at, :updated_at
json.url video_url(video, format: :json)
