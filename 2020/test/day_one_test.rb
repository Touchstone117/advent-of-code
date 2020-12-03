# frozen_string_literal: true

require_relative '../lib/env'
require_relative '../day_one/day_one'

class DayOneTest < Minitest::Test
  def test_part_1_practice
    assert_equal 514_579, DayOne.new(DayOneInput.practice).solve_part_one
  end

  def test_part_1_real
    assert_equal 1_018_336, DayOne.new(DayOneInput.real).solve_part_one
  end

  def test_part_2_practice
    assert_equal 241_861_950, DayOne.new(DayOneInput.practice).solve_part_two
  end

  def test_part_2_real
    assert_equal 288_756_720, DayOne.new(DayOneInput.real).solve_part_two
  end
end
