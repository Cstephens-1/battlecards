class UnitSerializer < ActiveModel::Serializer
  attributes :id, :name, :health, :rarity, :cost
end
