# frozen_string_literal: true

require 'env'

module DayTwoInput
  def self.practice
    File.readlines("#{__dir__}/input_practice.txt")
  end

  def self.real
    File.readlines("#{__dir__}/input_real.txt")
  end
end

class DayTwoTest < MiniTest::Test
  def test_day_one_part_one_practice
    assert_equal 150, DayTwo.new(DayTwoInput.practice).solve_part_one
  end

  def test_day_one_part_one_real
    assert_equal 1_989_014, DayTwo.new(DayTwoInput.real).solve_part_one
  end

  # def test_day_one_part_two_practice
  #   assert_equal 5, DayTwo.new(DayTwoInput.practice).solve_part_two
  # end

  # def test_day_one_part_two_real
  #   assert_equal 1150, DayTwo.new(DayTwoInput.real).solve_part_two
  # end
end

class DayTwo
  def initialize(input)
    @input = input
    @horizontal = 0
    @depth = 0
  end

  def solve_part_one
    # @input.map do |value|
    #   split = value.split(' ')
    #   eval("#{split[0]}(#{split[1]})")
    # end

    @input.each do |value| 
      eval value
    end

    @horizontal * @depth
  end

  def forward(number)
    @horizontal += number
  end

  def down(number)
    @depth += number
  end

  def up(number)
    @depth -= number
  end
end
