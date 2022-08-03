class UnitsController < ApplicationController
skip_before_action :confirm_authentication




    def index 
        units = Unit.all 
        render json: units
    end

    def show
        unit = Unit.find_by(id: params[:id])
        render json: unit
    end

    def unit_params
        params.permit(:id, :name, :health, :rarity,:cost)
    end
end
