class LibrariesController < ApplicationController
    skip_before_action :confirm_authentication
    def index 
        library = Library.all 
        render json: library
    end

    def show 
        library = Library.find_by(id: params[:id])
        render json: library
    end

    def library_params 
        params.permit(:id, :user_id, :unit_id)
    end
end
