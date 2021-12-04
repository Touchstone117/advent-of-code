# frozen_string_literal: true

require 'env'

module DayThreeInput
  def self.practice
    File.readlines("#{__dir__}/input_practice.txt")
  end

  def self.real
    File.readlines("#{__dir__}/input_real.txt")
  end
end

class DayThreeTest < MiniTest::Test
  def test_day_one_part_one_practice
    assert_equal 198, DayThreePartOne.new(DayThreeInput.practice).solve_part_one
  end

  def test_day_one_part_one_real
    assert_equal 2_035_764, DayThreePartOne.new(DayThreeInput.real).solve_part_one
  end

  # def test_day_one_part_two_practice
  #   assert_equal 900, DayThreePartTwo.new(DayThreeInput.practice).solve_part_two
  # end

  # def test_day_one_part_two_real
  #   assert_equal 2_006_917_119, DayThreePartTwo.new(DayThreeInput.real).solve_part_two
  # end
end

class DayThreePartOne
  def initialize(input)
    @input = input
    @horizontal = 0
    @depth = 0
  end

  def count_bits(input_bits)
    output = ''
    {
      ones: input_bits.count(1),
      zeros: input_bits.count(0)
    }
  end

  def gamma_rate_calc(input)
    # Finds most common
    return '0' if input[:ones] < input[:zeros]
    return '1' if input[:ones] > input[:zeros]

    raise 'neither'
  end

  def epsilon_rate_calc(input)
    # Finds least common
    return '0' if input[:ones] > input[:zeros]
    return '1' if input[:ones] < input[:zeros]

    raise 'neither'
  end

  def index_bits(index)
    index_bits = []

    @input.each do |line|
      index_bits << line[index].to_i
    end

    index_bits
  end

  def solve_part_one
    gamma_rate = ''
    epsilon_rate = ''

    @input[0].strip.length.times do |i|
      counted = count_bits(index_bits(i))

      gamma_rate += gamma_rate_calc(counted)
      epsilon_rate += epsilon_rate_calc(counted)
    end

    gamma_rate.to_i(2) * epsilon_rate.to_i(2)
  end
end
