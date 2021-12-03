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
    assert_equal 150, DayTwoPartOne.new(DayTwoInput.practice).solve_part_one
  end

  def test_day_one_part_one_real
    assert_equal 1_989_014, DayTwoPartOne.new(DayTwoInput.real).solve_part_one
  end

  def test_day_one_part_two_practice
    assert_equal 900, DayTwoPartTwo.new(DayTwoInput.practice).solve_part_two
  end

  def test_day_one_part_two_real
    assert_equal 2_006_917_119, DayTwoPartTwo.new(DayTwoInput.real).solve_part_two
  end
end

class DayTwoPartOne
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

class DayTwoPartTwo
  def initialize(input)
    @input = input
    @horizontal = 0
    @depth = 0
    @aim = 0
  end

  def solve_part_two
    @input.each do |value|
      eval value
    end

    @horizontal * @depth
  end

  def forward(number)
    @horizontal += number
    adjustment = @aim * number
    @depth += adjustment
  end

  def down(number)
    @aim += number
  end

  def up(number)
    @aim -= number
  end
end
